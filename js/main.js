/**
 * Inmovalley - JavaScript Principal
 */

(function($) {
	'use strict';

	$(document).ready(function() {
		initMenu();
		initSideMenu();
		initHeroArrow();
		initSearch();
		initFavorites();
		initContactForm();
		initSmoothScroll();
		loadFavoritesFromStorage();
	});

	/**
	 * Menú navegación
	 */
	function initMenu() {
		// Marcar enlace activo al scroll
		$(window).on('scroll', function() {
			const scrollPos = $(window).scrollTop() + 200;
			
			$('.main-header__menu a, .main-footer__menu a').each(function() {
				const link = $(this);
				const href = link.attr('href');
				
				if(href && href.startsWith('#')) {
					const section = $(href);
					if(section.length) {
						const sectionTop = section.offset().top;
						const sectionBottom = sectionTop + section.outerHeight();
						
						if(scrollPos >= sectionTop && scrollPos < sectionBottom) {
							$('.main-header__menu a, .main-footer__menu a').removeClass('active');
							link.addClass('active');
						}
					}
				}
			});
		});
	}

	/**
	 * Menú lateral overlay
	 */
	function initSideMenu() {
		const sideMenu = $('#sideMenu');
		
		// Abrir menú
		$('#menuToggle, #openMenu').on('click', function(e) {
			e.preventDefault();
			sideMenu.addClass('active');
			$('body').css('overflow', 'hidden');
		});
		
		// Cerrar menú
		$('#closeMenu, .side-menu__overlay').on('click', function(e) {
			e.preventDefault();
			sideMenu.removeClass('active');
			$('body').css('overflow', '');
		});
		
		// Cerrar al click en enlace
		$('.side-menu__nav a').on('click', function() {
			sideMenu.removeClass('active');
			$('body').css('overflow', '');
		});
		
		// Cerrar con ESC
		$(document).on('keydown', function(e) {
			if(e.key === 'Escape' && sideMenu.hasClass('active')) {
				sideMenu.removeClass('active');
				$('body').css('overflow', '');
			}
		});
	}

	/**
	 * Flecha hero scroll
	 */
	function initHeroArrow() {
		$('#scrollToSearch').on('click', function(e) {
			e.preventDefault();
			const searchSection = $('#searchSection');
			if(searchSection.length) {
				$('html, body').animate({
					scrollTop: searchSection.offset().top - 100
				}, 800);
			}
		});
	}

	/**
	 * Buscador de propiedades
	 */
	function initSearch() {
		const searchForm = $('#searchForm');
		
		searchForm.on('submit', function(e) {
			e.preventDefault();
			
			const estado = $('select[name="estado"]').val();
			const tipo = $('select[name="tipo"]').val();
			const poblacion = $('select[name="poblacion"]').val();
			const zona = $('select[name="zona"]').val();
			const precioHasta = parseInt($('select[name="precio-hasta"]').val()) || 999999999;
			const referencia = $('input[name="referencia"]').val().trim().toLowerCase();
			
			let visibleCount = 0;
			$('.property-card').each(function() {
				const card = $(this);
				let show = true;
				
				// Filtrar por estado
				if(estado && card.data('status') !== estado) {
					show = false;
				}
				
				// Filtrar por tipo
				if(tipo && card.data('type') !== tipo) {
					show = false;
				}
				
				// Filtrar por ciudad
				if(poblacion && card.data('city') !== poblacion) {
					show = false;
				}
				
				// Filtrar por zona
				if(zona && card.data('zone') !== zona) {
					show = false;
				}
				
				// Filtrar por precio
				const cardPrice = parseInt(card.data('price'));
				if(cardPrice > precioHasta) {
					show = false;
				}
				
				// Filtrar por referencia
				if(referencia) {
					const cardRef = card.find('.property-card__badge').text().toLowerCase();
					if(!cardRef.includes(referencia)) {
						show = false;
					}
				}
				
				// Mostrar/ocultar
				if(show) {
					card.parent().fadeIn(300);
					visibleCount++;
				} else {
					card.parent().fadeOut(300);
				}
			});
			
			// Scroll a propiedades
			$('html, body').animate({
				scrollTop: $('#propiedades').offset().top - 100
			}, 800);
			
			console.log('Propiedades encontradas: ' + visibleCount);
		});
		
		// Reset filtros
		searchForm.on('reset', function() {
			setTimeout(function() {
				$('.property-card').parent().fadeIn(300);
			}, 100);
		});
		
		// Búsqueda avanzada (placeholder)
		$('.search-box__button--advanced').on('click', function(e) {
			e.preventDefault();
			alert('Búsqueda avanzada - Funcionalidad pendiente');
		});
	}

	/**
	 * Sistema de favoritos
	 */
	function initFavorites() {
		$('.property-card__favorite, .property-month__favorite').on('click', function(e) {
			e.preventDefault();
			e.stopPropagation();
			
			const btn = $(this);
			const card = btn.closest('.property-card, .property-month__card');
			const ref = card.find('.property-card__badge, .property-month__badge').text();
			
			btn.toggleClass('active');
			const isActive = btn.hasClass('active');
			
			btn.attr('aria-pressed', isActive);
			btn.attr('aria-label', isActive ? 'Quitar de favoritos' : 'Añadir a favoritos');
			
			saveFavorite(ref, isActive);
			
			if(isActive) {
				btn.css('transform', 'scale(1.2)');
				setTimeout(function() {
					btn.css('transform', '');
				}, 200);
			}
			
			updateFavoritesCount();
		});
	}

	/**
	 * Guardar favorito
	 */
	function saveFavorite(ref, isFavorite) {
		let favorites = JSON.parse(localStorage.getItem('inmovalley_favorites') || '[]');
		
		if(isFavorite) {
			if(!favorites.includes(ref)) {
				favorites.push(ref);
			}
		} else {
			favorites = favorites.filter(item => item !== ref);
		}
		
		localStorage.setItem('inmovalley_favorites', JSON.stringify(favorites));
	}

	/**
	 * Cargar favoritos desde localStorage
	 */
	function loadFavoritesFromStorage() {
		const favorites = JSON.parse(localStorage.getItem('inmovalley_favorites') || '[]');
		
		$('.property-card, .property-month__card').each(function() {
			const card = $(this);
			const ref = card.find('.property-card__badge, .property-month__badge').text();
			const btn = card.find('.property-card__favorite, .property-month__favorite');
			
			if(favorites.includes(ref)) {
				btn.addClass('active');
				btn.attr('aria-pressed', 'true');
				btn.attr('aria-label', 'Quitar de favoritos');
			}
		});
		
		updateFavoritesCount();
	}

	/**
	 * Actualizar contador de favoritos
	 */
	function updateFavoritesCount() {
		const favorites = JSON.parse(localStorage.getItem('inmovalley_favorites') || '[]');
		const count = favorites.length;
		
		if(count > 0) {
			$('#fav-count').text(count).show();
		} else {
			$('#fav-count').text('').hide();
		}
	}

	/**
	 * Formulario de contacto
	 */
	function initContactForm() {
		const contactForm = $('#contactForm');
		
		contactForm.on('submit', function(e) {
			e.preventDefault();
			
			const nombre = $('input[name="nombre"]').val().trim();
			const email = $('input[name="email"]').val().trim();
			const telefono = $('input[name="telefono"]').val().trim();
			const mensaje = $('textarea[name="mensaje"]').val().trim();
			const privacidad = $('input[name="privacidad"]').is(':checked');
			
			// Validaciones
			if(!nombre || nombre.length < 2) {
				alert('Por favor, introduce tu nombre');
				$('input[name="nombre"]').focus();
				return;
			}
			
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if(!email || !emailRegex.test(email)) {
				alert('Por favor, introduce un email válido');
				$('input[name="email"]').focus();
				return;
			}
			
			if(!mensaje || mensaje.length < 10) {
				alert('Por favor, escribe un mensaje (mínimo 10 caracteres)');
				$('textarea[name="mensaje"]').focus();
				return;
			}
			
			if(!privacidad) {
				alert('Debes aceptar la política de privacidad');
				return;
			}
			
			// Simulación de envío
			const submitBtn = contactForm.find('.contact-section__button');
			const originalText = submitBtn.text();
			
			submitBtn.prop('disabled', true).text('ENVIANDO...');
			
			setTimeout(function() {
				alert('Gracias por contactarnos. Te responderemos pronto.');
				contactForm[0].reset();
				submitBtn.prop('disabled', false).text(originalText);
			}, 1500);
		});
	}

	/**
	 * Smooth scroll
	 */
	function initSmoothScroll() {
		$('a[href^="#"]').on('click', function(e) {
			const href = $(this).attr('href');
			
			if(!href || href === '#') {
				return;
			}
			
			const target = $(href);
			if(target.length) {
				e.preventDefault();
				const offset = target.attr('id') === 'inicio' ? 0 : 100;
				$('html, body').stop().animate({
					scrollTop: target.offset().top - offset
				}, 800);
			}
		});
	}

})(jQuery);
